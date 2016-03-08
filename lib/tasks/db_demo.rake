namespace :db do desc 'add demo data'
 task :demo => :environment do require 'faker' 
  10.times do 
   User.create( :name => Faker::Name.name, :age => rand(60) )
  end
 end 
end 
# projects/app/models/project.rb class Project < ActiveRecord::Base end 
