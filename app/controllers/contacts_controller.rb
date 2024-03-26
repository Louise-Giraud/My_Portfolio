class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @contact.request = request

    if @contact.deliver
      send_email_via_mailgun(@contact)
      redirect_to new_contact_path, notice: 'Thank you for your message! 📬'
    else
      redirect_to new_contact_path, alert: 'Ops... Sorry, the message could not be sent.'
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :message, :nickname)
  end

  def send_email_via_mailgun(contact)
    api_key = ENV['MAILGUN_API_KEY']
    domain_name = 'louise-giraud.com'

    url = URI("https://api.eu.mailgun.net/v3/#{domain_name}")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    request = Net::HTTP::Post.new(url)
    request.basic_auth('api', api_key)

    request.set_form_data(
      'from' => 'Excited User <postmaster@louise-giraud.com>',
      'to' => 'louisegiraud7@gmail.com',
      'subject' => 'Contact Form Inquiry',
      'text' => contact.message,
      'html' => "<p>Message from #{contact.name} (#{contact.email}):</p><p>#{contact.message}</p>"
    )

    response = http.request(request)
    puts response.read_body

    # Additional logic if needed
  end
end
