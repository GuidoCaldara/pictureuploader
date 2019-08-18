require "mini_magick"

class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new
    img = params[:photo][:pic].tempfile.to_path
    image = MiniMagick::Image.open(img)
    @photo.pic = image.crop crop_specs(params)
    @photo.save
    redirect_to root_path
  end

  def crop_specs(params)
    byebug
    height = params[:height]
    width = params[:width]
    xOffset = params[:xOffset]
    yOffset = params[:yOffset]
    "#{width}x#{height}+#{xOffset}+#{yOffset}"
  end
end
