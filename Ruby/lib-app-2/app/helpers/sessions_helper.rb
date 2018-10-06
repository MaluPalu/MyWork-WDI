module SessionsHelper
 def login(gymrat)
   session[:gymrat_id] = gymrat.id
   @current_gymrat = gymrat
 end

 def current_gymrat
   @current_gymrat ||= Gymrat.find_by_id(session[:gymrat_id])
 end

 def logout
    @current_gymrat = session[:gymrat_id] = nil
 end
end
