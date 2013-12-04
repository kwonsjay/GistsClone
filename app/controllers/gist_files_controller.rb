class GistFilesController < ApplicationController

  def create
    @gistFile = GistFile.new(params[:gistFile])
    if @gistFile.save
      render :json => @gistFile
    else
      render :json => "Gist File not saved", :status => 422
  end

end
