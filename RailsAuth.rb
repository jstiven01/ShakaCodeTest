class ApplicationController < ActionController::API
    # called before every action on controllers
  before_action :authorize_request
  attr_reader :current_user

  private

  # Check for valid request token and return user
  def authorize_request
     unless request.headers['Authorization'].present?
       render json: {message: 'Missing Token'}, status: :unauthorized
     end
  end
  
end

class AccountController < ApplicationController
  # TODO: Add Signup, Login, Logout Routes
  skip_before_action :authorize_request, only: [:signup, :login]
  
  def signup
    @user = User.create(data_params)
    if @user.save
      response.set_header('authorization', 'token')
      render json:  {id: @user.id, name: @user.name, email: @user.email}, status: :created
   else
      p @user.errors
      render json: @user.errors, status: :bad_request
   end
    
  end
  
  def login
    permited_params = data_params

    user = User.find_by(email: permited_params[:email], password:  permited_params[:password] )
 
    if user
       response.set_header('authorization', 'token')
       head :no_content
    else
      render :nothing => true, :status => :bad_request
    end
  end
  
  def logout
    response.delete_header('authorization')
  end
  
   protected
  
  def data_params
    params.require(:data).permit(:name, :email, :password)
  end
  
end

class AlbumsController < ApplicationController
  skip_before_action :authorize_request, only: [:index, :show]
  def create
    render json: Album.create!(data_params)
  end
  
  def show
    render json: existing_album
  end

  def index 
    render json: Album.all
  end
  
  def update
    existing_album.update!(data_params)
    render json: existing_album    
  end
  
  def destroy
    existing_album.destroy!
    head :no_content
  end
  
  protected
  
  def existing_album
    Album.find(params['id'])
  end

  def data_params
    params.require(:data).permit(:title, :performer, :cost)
  end
end

class PurchasesController < ApplicationController
  def create
    render json: Purchase.create!(data_params)
  end
  
  protected 
  
  def data_params
    params.require(:data).permit(:user_id, :album_id)
  end 
end

ActiveRecord::Schema.define do
    create_table :albums do |table|
      table.column :title, :string
      table.column :performer, :string
      table.column :cost, :integer
    end
  
    create_table :purchases do |table|
      table.column :user_id, :integer
      table.column :album_id, :integer
    end
  
    create_table :users do |table|
      table.column :name, :string
      table.column :email, :string
      table.column :password, :string
    end
end

class Album < ActiveRecord::Base
  has_many :purchases
end

class Purchase < ActiveRecord::Base
  belongs_to :album
  belongs_to :user
end

class User < ActiveRecord::Base
  has_many :purchases
  validates_presence_of :email, :password, :name
  
end