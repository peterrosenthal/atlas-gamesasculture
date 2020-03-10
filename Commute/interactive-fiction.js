var storyContent = ﻿{"inkVersion":19,"root":[["ev",0,3,"rnd","/ev",{"VAR=":"sleepiness","re":true},"\n","ev",{"VAR?":"sleepiness"},2,"*","/ev",{"VAR=":"grumpiness","re":true},{"->":"alarm"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"alarm":[[["ev","visit",7,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"ev","du",6,"==","/ev",{"->":".^.s6","c":true},"ev","du",7,"==","/ev",{"->":".^.s7","c":true},"nop",{"s0":["pop","^You wake up to the annoying sound of your 7:45 alarm. ",{"->":".^.^.53"},null],"s1":["pop","^Your 8:00 alarm ",{"->":".^.^.53"},null],"s2":["pop","^Your 8:15 alarm ",{"->":".^.^.53"},null],"s3":["pop","^Your 8:30 alarm ",{"->":".^.^.53"},null],"s4":["pop","^Your 8:45 alarm ",{"->":".^.^.53"},null],"s5":["pop","^Your 9:00 alarm ",{"->":".^.^.53"},null],"s6":["pop","^Your 9:15 alarm ",{"->":".^.^.53"},null],"s7":["pop","^Your 9:30 alarm",{"->":".^.^.53"},null],"#f":5}],"\n",["ev",{"CNT?":"snooze"},"!","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ Your phone is all the way on the other side of the bed, so you have to roll over several times to get to it.","\n",{"->":".^.^.^.4"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ starts to go off, and you know that you can't keep sleeping with it beeping like this. You have to deal with it somehow.","\n",{"->":".^.^.^.4"},null]}],"nop","\n",["ev",{"VAR?":"grumpiness"},3,">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ The sun is fully hidden behind the clouds outside and barely any light is shining through your windows making it too hard to get out of bed.","\n",{"->":".^.^.^.9"},null]}],["ev",{"VAR?":"grumpiness"},0,">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ The sun is just starting to peek through the almost overcast clouds. Just small amount of light shines through your windows making getting out of bed a challenge","\n",["ev",{"VAR?":"sleepiness"},0,">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^.","\n",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["\n","<>","^, but not impossible.","\n",{"->":".^.^.^.6"},null]}],"nop","\n",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ The sun is shining brightly through the windows already, making it much easier to wake up.","\n",{"->":".^.^.^.9"},null]}],"nop","\n","ev","str","^Turn the alarm off.","/str",{"VAR?":"sleepiness"},0,"==","/ev",{"*":".^.c-0","flg":5},"ev","str","^Hit snooze.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"wakeup"},{"#f":5}],"c-1":["\n",{"->":"snooze"},{"#f":5}]}],{"#f":1}],"wakeup":["^You turn your alarm off and try to figure out what you want to do with your morning first.","\n",{"->":"morning_decision"},{"#f":1}],"snooze":["ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"ev",{"VAR?":"grumpiness"},1,"-","/ev",{"VAR=":"grumpiness","re":true},["ev",{"VAR?":"sleepiness"},0,">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"sleepiness"},1,"-","/ev",{"VAR=":"sleepiness","re":true},{"->":"snooze.13"},null]}],"nop","\n",["ev",{"CNT?":".^.^"},8,"<","/ev",{"->":".^.b","c":true},{"b":["\n","^You're not feeling like getting up yet and decide to let your phone wake you up again in another 15 minutes.","\n",{"->":"alarm"},{"->":"snooze.17"},null]}],[{"->":".^.b"},{"b":["\n","^You reach over to hit the snooze button and you finally realize what time it actually is. Work started half of an hour ago now, and the best thing to do at this point is just to call in sick and hope you don't get fired for waiting until after the shift started to call.","\n","^You don't need to snooze your alarm any more, so you just turn it all the way off and go back to sleep until the late afternoon.","\n","^\"Note to self: Sunday nights are not ideal for going out,\" you mumble to yourself as you fall back asleep.","\n","end",{"->":"snooze.17"},null]}],"nop","\n",{"#f":1}],"morning_decision":[["ev",{"VAR?":"time"},5,"<","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"time"},1,"+","/ev",{"VAR=":"time","re":true},"ev","str","^Take a shower","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Eat breakfast","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Make coffee","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Head out to work","/str","/ev",{"*":".^.c-3","flg":20},{"->":".^.^.^.2"},{"c-0":["\n",{"->":"shower"},{"#f":5}],"c-1":["\n",{"->":"breakfast"},{"#f":5}],"c-2":["\n",{"->":"coffee"},{"#f":5}],"c-3":["\n",{"->":"commute_type"},{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","^You're running out of time to get to work! ","<>","\n",{"->":"car"},{"->":".^.^.^.2"},null]}],"nop","\n",{"#f":1}],"shower":["ev",{"VAR?":"grumpiness"},1,"-","/ev",{"VAR=":"grumpiness","re":true},"^You've always preferred showering in the mornings to showering at night, and you've got the time to this morning before work, so you might as well. The water is nice and warm, and the bathroom fills with steam as you wash yourself up. You feel like you've never had a shower that felt this good in your entire life, but you also feel this way almost every time you take a morning shower, so in's not actually that special. The shower really helps you feel both relaxed and more awake at the same time, you feel a lot more ready to take on the day.","\n",{"->":"morning_decision"},{"#f":1}],"breakfast":[["^Your stomach is grumbling and begging you to get some morning food in you. When you enter the kitchen you notice a half eaten box of a dozen donuts sitting on the counter. You remember going to Safeway at the end of last night, but you can't remember what you got... Was it really just donuts? Resisting the urge to just eat donuts, you walk past them to check what's in the fridge for breakfast.","\n","ev","str","^Make some eggs","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Mix some berries and yogurt","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Go back and have a donut","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n",{"->":"eggs"},{"#f":5}],"c-1":["\n",{"->":"yogurt"},{"#f":5}],"c-2":["\n",{"->":"donut"},{"#f":5}]}],{"#f":1}],"coffee":["ev",{"VAR?":"grumpiness"},2,"+","/ev",{"VAR=":"grumpiness","re":true},"^You head down to the kitchen to make yourself some coffee in the Keurig your grandma got you last christmas. Right as you think it's finished up you reach for the mug, but the Keurig isn't quite done yet and it spits out just a little bit more boiling hot coffee onto your hand. You instinctively pull your hand back, but in the process of doing so you also knock the mug over, spilling your coffee all across the counter. You yell a curse at Keurig and vow to get a new machine before ever making coffee again.","\n",{"->":"morning_decision"},{"#f":1}],"commute_type":[["^You have enough time to","ev",{"VAR?":"time"},5,"<","/ev",[{"->":".^.b","c":true},{"b":["^ walk or",{"->":".^.^.^.7"},null]}],"nop","^ bike to work this morning instead of driving if you want to. How do you want to get to work this morning?","\n","ev","str","^Drive your car","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Ride your bike","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Walk","/str",{"VAR?":"time"},5,"<","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n",{"->":"car"},{"#f":5}],"c-1":["\n",{"->":"bike"},{"#f":5}],"c-2":["\n",{"->":"walk"},{"#f":5}]}],{"#f":1}],"eggs":["ev",{"VAR?":"grumpiness"},1,"-","/ev",{"VAR=":"grumpiness","re":true},"^There's only two eggs left in the carton, the perfect amount for this morning, but you'll need to go back to the store soon if you want eggs again tomorrow. You put a pan on the stove, get it hot, spray it with a bit of olive oil, and start frying your eggs. In just a couple minutes you end up with two perfect looking sunnyside up eggs that are so delicious that you almost forget to taste them you eat them so quick.","\n",{"->":"morning_decision"},{"#f":1}],"yogurt":["ev",{"VAR?":"grumpiness"},1,"-","/ev",{"VAR=":"grumpiness","re":true},"^You pull the yogurt out of the fridge as well as all of the berries from the fruit drawer. The strawberries unfortunately look like they have a bit of mold on them so you throw them out, but you still have enough blueberries and raspberries to make a delicious breakfast. As you're eating, you quickly scribble down 'strawberries' on your actual shopping list.","\n",{"->":"morning_decision"},{"#f":1}],"donut":["ev",{"VAR?":"grumpiness"},1,"+","/ev",{"VAR=":"grumpiness","re":true},"^You toke a look in the fridge for real food, but all you can think about were those donuts. You close the fridge and turn around to look at the donuts on the counter again. All the different donut flavors look so good, and you have a hard time deciding which one to take. Eventually you decide on a classic simple glazed donut and devour it in seconds.","\n","^A couple minutes later a sharp pain starts developing in your stomache. Maybe eating a donut for breakfast after already eating a half dozen last night wasn't the best idea.","\n",{"->":"morning_decision"},{"#f":1}],"car":[["^You quickly hop in your car and set off on your typical morning route. Luckily your work isn't that far away at all, but that also means if you wanted to listen to a podcast on the way, you'd only be able to catch a fraction of it.","\n","ev","str","^Listen to a podcast","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Just turn the radio on","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^That isn't too big of a deal to you though, and you put your favorite podcast on. You'll be able to finish the podcast later anyways.","\n",{"->":"first_crosswalk"},{"#f":5}],"c-1":["\n","^So you turn the radio on instead. You're feeling just a little bit lazy, so you leave it on whatever station it was on last time you used it.","\n",{"->":"first_crosswalk"},{"#f":5}]}],{"#f":1}],"bike":["^Your bike is sitting next to your front door, all locked up and safe. The weather had't really been the best all of last week, but now it's nice enough out that you want to stretch out your legs and have a nice bike ride to work. It's close enough that biking is barely slower than driving anyways.","\n",{"->":"first_crosswalk"},{"#f":1}],"walk":["^The weather is good enough out there, and you haven't been out for a nice walk in ages. You have plenty of time before work this morning, so you decide to save the gas in your car and walk to work.","\n",{"->":"first_crosswalk"},{"#f":1}],"first_crosswalk":[["ev",{"CNT?":"car"},"/ev",{"->":".^.b","c":true},{"b":["\n","^There's one intersection before you get out of your neighborhood and on to the busier street in town that has a very popular crosswalk. It's right next to a bike path entrance and a park. As you pull up close to the intersection you're not really sure if you see anyone trying to use the crosswalk, but you don't think anyone is, and it's only a two way stop meaning you have to poke your nose into the intersection to make sure there's no cross traffic that doesn't have a stop sign before you go.","\n","ev",{"VAR?":"grumpiness"},4,">","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"car_roll_through"},{"->":".^.^.^.9"},null]}],"nop","\n","ev","str","^Stop before the stop bar so you can properly look for pedestrians before pulling farther forward","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Save some time and roll through the stop bar to check the intersection for cars first","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.3"},{"c-0":["\n",{"->":"car_stop_at_bar"},{"#f":5}],"c-1":["\n",{"->":"car_roll_through"},{"#f":5}]}]}],["ev",{"CNT?":"bike"},"/ev",{"->":".^.b","c":true},{"b":["\n","ev",0,1,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^After biking for just a few minutes you come up on the last intersection before you can get away from cars and onto the bike path. You have a stop sign and the cross traffic doesn't, but you know as soon as you get passed this intersection you'll get to a park with an entrance to the city bike path and be so much safer. You don't think you see any cross traffic coming.","\n","ev",{"VAR?":"grumpiness"},4,">",{"VAR?":"rng"},0,"==","&&","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"bike_roll_through"},{"->":".^.^.^.20"},null]}],"nop","\n","ev","str","^Stop at the stop sign so you can properly look for cars that would hit you","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Try to get a quicker commute by keeping your speed up through the intersection","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.3"},{"c-0":["\n",{"->":"bike_stop_at_sign"},{"#f":5}],"c-1":["\n",{"->":"bike_roll_through"},{"#f":5}]}]}],["ev",{"CNT?":"walk"},"/ev",{"->":".^.b","c":true},{"b":["\n","^As you get close to the outskirts of your neighborhood you remember a short cut that you can take, a sidewalk overpass going over one of the busiest streets in town. But in order to get to it, you have to cross the street first. The next intersection coming up looks like a good oportunity! It's right next to a park, and the cars have a stop sign in the direction you need as well as large a \"pedestrian crossing\" sign too, so getting accross the street here should be easy enough. Before entering the intersection you check for cars and see a red hatchback coming down the same way you were. They have a stop sign though, and you're pretty certain they will stop for you.","\n","ev",{"VAR?":"grumpiness"},4,">","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"walk_cross_street"},{"->":".^.^.^.9"},null]}],"nop","\n","ev","str","^Cross the street","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Wait to make sute the car will actually stop","/str","/ev",{"*":".^.c-1","flg":4},{"->":".^.^.^.3"},{"c-0":["\n",{"->":"walk_cross_street"},{"#f":5}],"c-1":["\n",{"->":"walk_wait"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"car_roll_through":["ev",0,9,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^Despite there being a very active crosswalk at this intersection you're very eager to get to work this morning, so you simply ignore it and roll straight through the stop bar and crosswalk.","\n",["ev",{"VAR?":"rng"},{"VAR?":"grumpiness"},">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ Luckily for you, there aren't any pedestrians around and you get away with it. You saved yourself a whole half second there on your commute which gives you a real nice adrenaline rush, but unfortunately there's a car coming in the cross direction and you still have to wait unless you actually want to get in a car crash.","\n",{"->":"work"},{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ All of the sudden there's a person in the crosswalk that you didn't notice when pulling up! You try to stop in time but it's too late, you were already on a stop trajectory that ended several feet after this person. The next second feels like a whole minute as their hip crushes your headlight and they rebound, falling to the ground in the other direction.","\n","^Nobody says anything for what seems like forever. You're in shock and they're in just as much shock as you. Finally they let out a cry of pain that wakes you up from your complete daze, and you jump out of your car to help however you can. Their left leg looks like it could be broken, you're worried that they might be even worse off than that though. You call 911 and start to explain the situation while trying to also help the person that you hit get themselves into a more cofortable position. You're not really sure what more to do at this point, but you are sure that you really fucked up this morning.","\n","end",{"->":".^.^.^.11"},null]}],"nop","\n",{"#f":1}],"car_stop_at_bar":["ev",0,9,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^You come to a complete stop before the crosswalk so you can take a second to properly look for nearby pedestrians.","\n",["ev",{"VAR?":"rng"},{"VAR?":"grumpiness"},">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ There's nobody there, but that's fine, it only took you half a second to check.","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ There actually is someone there that's just about to set foot in the crosswalk, so it's a good thing you stopped to check! You just have to wait a second or two for them to cross the street.","\n",{"->":".^.^.^.11"},null]}],"nop","\n","<>","^ Then you pull forward to check the intersection for cars, and it's clear, so you get to breeze through the intersection without any problems.","\n",{"->":"work"},{"#f":1}],"bike_roll_through":["ev",0,9,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^The trick to making your bike commute even faster than if you were to drive is to live life dangerously and take some risks every once in a while. Well actually the real trick is to try and maintain your momentum at all costs so that instead of wasting energy always getting back up to speed, you can just use that energy to get going even faster. But those two tricks usually come in a package deal. Stoping at this stop sign would kill your momentum so you decide to take the risk and keep going full speed through the intersection. You didn't even think you saw any cars as you were getting close...","\n",["ev",{"VAR?":"rng"},{"VAR?":"grumpiness"},">","/ev",{"->":".^.b","c":true},{"b":["\n","^And you were right! You get to keep all of your speed as you breeze through the intersection and onto the bike path. You've got a really good feeling now about how the rest of your commute will go this morning, you're having a lucky day.","\n","ev",{"VAR?":"grumpiness"},2,"-","/ev",{"VAR=":"grumpiness","re":true},{"->":"work"},{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^But you were so so wrong. Immediately before you enter the intersection a large silver SUV comes in from the left. Instead of getting hit by the car, you are the one that is hitting the car, this isn't good. You squeeze the brakes as hard as you can, but your bike just starts skidding, not stopping. When your bike collides with the land-yacht you get thrown over your handlebars and straight through their back-seat window. They come to a screeching halt and let out a cry of shock and disbelief, meanwhile you feel pain all over your body. At least everything is set up to get a quick ride to the hospital now.","\n","end",{"->":".^.^.^.11"},null]}],"nop","\n",{"#f":1}],"bike_stop_at_sign":["ev",0,9,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^Although you initially thought the intersection was clear, you come to a complete stop at the stop sign just to be safe, and it's always a smart idea to follow all the same traffic laws as a car when you're biking on the road. As you come to a complete stop you check the intersection for cars again,","\n",["ev",{"VAR?":"rng"},{"VAR?":"grumpiness"},">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ and you were right the first time around. So you get your bike rolling again, and cross the street","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ and it was a good thing you did, your observations the first time around were wrong. You wait for this silver land-yacht that you somehow didn't notice a couple of seconds ago to go through, and then head on through the intersection","\n",{"->":".^.^.^.11"},null]}],"nop","\n","<>","^ to the bikepath where you'll spend the rest of your commute.","\n",{"->":"work"},{"#f":1}],"walk_cross_street":["ev",0,9,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^So you just start walking across the street assuming that they will.","\n",["ev",{"VAR?":"rng"},{"VAR?":"grumpiness"},">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ For a second there it seems like they're moving too fast to be stopping for you, but then they do. Relieved, you finish crossing the other half of the street and make your way towards the overpass a couple blocks away.","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","<>","^ But after your first step in the intersection the car feels like it might be a bit too close, and right after you take your second step the car actually is too close. You assumed wrong, and the car is not stopping for you. Man versus car is a battle that the car always wins, and you know this. The first place you feel an impact is your left hip, and then your whole upper body hits the hood of their car before you fall back down and backwards in the direction the car is pushing you. The whole time this is happening it all feels like it's in slow motion to you until suddenly your head hits the pavement and it doesn't feel like anything to you anymore, just darkness.","\n","^You wake up minutes later in the back of an ambulence in pain all over, but with the relaxing realization that at least you don't have to go to work today anymore.","\n",{"->":".^.^.^.11"},null]}],"nop","\n",{"->":"work"},{"#f":1}],"walk_wait":["ev",0,9,"rnd","/ev",{"VAR=":"rng","re":true},"\n","^But you can never be too certain, so you decide to hang around the intersection for just a second just to make sure you actually know what's going on.","\n",["ev",{"VAR?":"rng"},{"VAR?":"grumpiness"},">","/ev",{"->":".^.b","c":true},{"b":["\n","<>","^ Before too long it becomes pretty clear that the car does indeed see you, and that they're stopping well before the intersection to give you plenty of space to walk in the crosswalk. So","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^The car rolls through the stop sign and turns right in front of you without using any turn signal at all. You're not sure whether you should be angry at the driver for not seeing you or if you should be glad that you waited that extra second or else you would be having a very bad day right now. Now that you're sure the intersection actually is clear though,","\n",{"->":".^.^.^.11"},null]}],"nop","\n","<>","^ you head across the street towards where the overpass is and the rest of your walk to work.","\n",{"->":"work"},{"#f":1}],"work":["^The rest of your commute to work goes really smoothly, better than normal you think. You sit down at your desk and take a moment to reflect on how nice it was that nothing went horribly wrong this morning, usually the commute to work is the most stressful part of mondays to you, but this one went okay. You wish every monday commute was this fine.","\n","end",{"#f":1}],"global decl":["ev",0,{"VAR=":"grumpiness"},0,{"VAR=":"sleepiness"},0,{"VAR=":"time"},0,{"VAR=":"rng"},"/ev","end",null],"#f":1}],"listDefs":{}};