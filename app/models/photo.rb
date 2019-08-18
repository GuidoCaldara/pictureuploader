class Photo < ApplicationRecord
  mount_uploader :pic, ImageUploader
end
