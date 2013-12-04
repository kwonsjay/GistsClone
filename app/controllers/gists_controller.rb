class GistsController < ApplicationController

  def index
    @gists = Gist.where(:user_id => current_user.id)
    render :json => @gists
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.user_id = current_user.id
    # @gistFileParams = params[:gistFiles].delete(:gistFiles) || []
    @gistFileParams = params[:gistFiles] || []

    # puts @gistFileParams

    @gistFileParams.each do |gistFile|
      p gistFile
      @gist.gist_files.build(gistFile)
    end

    if @gist.save!
      render :json => @gist
    else
      render :json => @gist.errors.full_messages, :status => 422
    end
  end

end
