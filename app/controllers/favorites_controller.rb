class FavoritesController < ApplicationController

  def index
  end

  def create
    @favorite = Favorite.new(params[:favorite])
    @favorite.user_id = current_user.id
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages, :status => 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy!
    render :json => "Favorite Destroyed"
  end

end
