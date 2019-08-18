require "carrierwave/processing/mini_magick"

class ImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
  include CarrierWave::MiniMagick
  process eager: true  # Force version generation at upload time.
  process convert: "jpg"
end
