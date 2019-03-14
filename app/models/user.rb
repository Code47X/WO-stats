class User < ApplicationRecord
  has_secure_password

  before_validation {
    self.username = self.username.to_s.downcase
    self.email = self.email.to_s.downcase 
  }

  validates_presence_of :username, :email
  validates_uniqueness_of :username, :email
  
end
