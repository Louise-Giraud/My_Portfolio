class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      redirect_to new_contact_path, notice: 'Thank you for your message! 📬'
    else
      redirect_to new_contact_path, alert: 'Ops... Sorry, the message could not be sent.'
    end
  end
end
