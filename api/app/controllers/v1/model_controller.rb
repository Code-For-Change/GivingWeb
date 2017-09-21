class V1::ModelController < ApplicationController
  def index
    @models = Model.all

    render :json => @models, status: :ok
  end

  def create
    @model = Model.new( model_params )
    @model.save
    puts @model.encrypted_password
    puts @model.errors.full_messages
    render json: @model, status: :created
  end

  def destroy
    @model = Model.where( id: params[:id] ).first
    if @model.destroy
      head(:ok)
    else
      head(:uprocessable_entity)
    end

  end

  private
  def model_params
    params.require(:model).permit([:email, :password, :password_confirmation])
  end
end
