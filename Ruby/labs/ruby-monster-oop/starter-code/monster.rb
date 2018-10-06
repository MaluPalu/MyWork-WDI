### monster.rb - run this file

# Monster class
class Monster
attr_accessor :habitat, :threat_level

@@count

def self.count
  @@count
end

def initialize(threat_level = :aggressive)
 @@count = @@count + 1
  puts "#{@@count}} monsters now roam the world"
 @threat_level = threat_level
end

def check_threat
  case @threat_level
  when :low
    return threat_level =  :low
  when :medium
    return threat_level = :medium
  when :high
    return threat_level = :high
  when :midnight
    return threat_level :midnight
  end
end
 def monster_MMA(monster1, monster2)
   if monster1.threat_level == monster2.threat_level
     monster2
   elseif monster1.threat_level == :low
     monster2
   elseif monster1.threat_level == :medium
      if monster2.threat_level == :low
        monster1
      else
        monster2
    end
  else monster2.threat_level == :high || :midnight
    monster2
  else
    monster1
        end
      end
    end
 end

def habitat?(the_habitat)
@habitat == the_habitat
end

end



# Zombie class



# Werewolf class



# Flying module



# Vampire class




### "Driver" Code Area
