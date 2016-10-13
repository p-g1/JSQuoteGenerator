$(document).ready(function() {
  var quoteSource = [{
    quote: "I don't like big feet. It reminds me of gammon.",
    name: "Alan Partridge"
  }, {
    quote: "Big Yellow Taxi there by Joni Mitchell, a song in which she complains that they 'paved paradise to put up a parking lot' - a measure which actually would have alleviated traffic congestion on the outskirts of paradise. Something which Joni singularly fails to point out, perhaps because it doesn't quite fit in with her blinkered view of the world. Nevertheless, nice song.",
    name: "Alan Partridge"
  }, {
    quote: "I know lying is wrong, but if the elephant man came in now in a blouse with some make up on, and said 'how do I look?' Would you say, bearing in mind he's depressed and has respiratory problems, would you say 'go and take that blusher off you mis-shapened elephant tranny'? No. You'd say 'You look nice... John'",
    name: "Alan Partridge"
  }, {
    quote: "God is a gas... but not a small gas like Calor Gas",
    name: "Alan Partridge"
  }, {
    quote: "We managed to rectify it, though, because it now says, by adapting it, 'Cook' where it once said 'Cock', and it says 'Pass' now where it once said 'Piss', so it's slightly less rude.",
    name: "Alan Partridge"
  }, {
    quote: "Quick tip for yourself: if you're ever doing an after-dinner speech, you say 'My Lords, Ladies and Gentlemen, sorry I'm late, I just popped to the toilet. And while I was there, I saw some graffiti and it said 'I used to be indecisive, but now I'm not so sure'.' Straight away you've got them by the jaffas.",
    name: "Alan Partridge"
  }, {
    quote: "We're down to the final lather. Just relax; there's a foamy bit on your shoulder - let's make it even more frothy with a squirt of light lemon liquid. Don't you feel good? Careful not to fall asleep and slip under, there's some terrible statistics about that.",
    name: "Alan Partridge"
  }, {
    quote: "Actually the best thing I did, was to get thrown out by my wife. She's living with a fitness instructor. He drinks that yellow stuff in tins. He's an idiot.",
    name: "Alan Partridge"
  }, {
    quote: "I'm gonna hump ya. Like Deputy Dog... would hump ya.",
    name: "Alan Partridge"
  }, {
    quote: "Sunday Bloody Sunday. What a great song. It really encapsulates the frustration of a Sunday, doesn't it? You wake up in the morning, you've got to read all the Sunday papers, the kids are running round, you've got to mow the lawn, wash the car, and you just think 'Sunday, bloody Sunday!'",
    name: "Alan Partridge"
  }, {
    quote: "Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, I repeat not, turn into an all-night rave.",
    name: "Alan Partridge"
  }, {
    quote: "Hello is that Curry's? I'd like to place an order for two supplementary, auxiliary speakers, to go with my Midi Hi-Fi system, apropos achieving surround sound. 'Apropos'...it's Latin. You ought to have a basic grasp of Latin if you're working in Curry's.",
    name: "Alan Partridge"
  }, {
    quote: "Bucktoothed simpletons with eyebrows on their cheeks... horses running through council estates... men in platform shoes being arrested for bombings... badly tarmacced drives... in this country.",
    name: "Alan Partridge"
  }, {
    quote: "Convoy? Michael, you're hanging around with a man who uses a collective term for a single vehicle.",
    name: "Alan Partridge"
  }, {
    quote: "Dan's a fantastic man! He really is. I was talking to him early and he asked me what kind of phone I had and I said a Motorola Timeport. And he said, 'that's saaad, you want to upgrade'. I said, so do you - to a new face. He nearly soiled himself! He said he was laughing so hard he had Kenco coming out of his nostrils, and that made me laugh. But...my nostrils were clear.",
    name: "Alan Partridge"
  }, {
    quote: "Right, dry skin cream. I'm having an attack of the old flakes again. This morning my pillow looked like a flapjack.",
    name: "Alan Partridge"
  }, {
    quote: "Got my fungal foot powder? Ah, it's a lifesaver, you know. I'd effectively be disabled if it weren't for these.",
    name: "Alan Partridge"
  }, {
    quote: "You make pigs smoke!",
    name: "Alan Partridge"
  }, {
    quote: "If you see a lovely field with a family having a picnic, and a nice pond in it, you fill in the pond with concrete, you plow the family into the soil, you blow up the tree, and use the leaves to make a dress for your wife who is also your brother.",
    name: "Alan Partridge"
  }, {
    quote: "Guide dogs for the blind. It's cruel really, isn't it? Getting a dog to lead a man round all day. Not fair on either of them.",
    name: "Alan Partridge"
  }, {
    quote: "Hi Susan. I was a bit bored so I dismantled my Corby Trouser Press. I can't put it back together again. Will that show up on my bill?",
    name: "Alan Partridge"
  }, {
    quote: "This chemical toilet is a Saniflow 33, now this little babe can cope with anything, and I mean anything. Earlier on I put in a pound of mashed up Dundee cake, let's take a look...not a trace! Peace of mind I'm sure, especially if you have elderly relatives on board.",
    name: "Alan Partridge"
  }, {
    quote: "All this wine nonsense! You get all these wine people, don't you? Wine this, wine that. Let's have a bit of red, let's have a bit of white. Ooh, that's a snazzy bouquet. Oh, this smells of, I don't know, basil. Sometimes you just want to say, sod all this wine, just give me a pint of...mineral water.",
    name: "Alan Partridge"
  }, {
    quote: "The temperature inside this apple pie is over 1000 degrees. If I squeeze it, a jet of molten bramley apple will squirt out. Could go your way; could go mine. Either way, one of us is going down!",
    name: "Alan Partridge"
  }, {
    quote: "All those people who go around saying “Life begins at forty,” they're notable by their absence. The nerve.",
    name: "Alan Partridge"
  }, {
    quote: "Two fat ladies, 88! Not that you'd find these ladies at a bingo hall, of course... they're altogether a higher class of fat lady.",
    name: "Alan Partridge"
  }, {
    quote: "There's never any graffiti in the hotel. Although in the Gents a couple of weeks a go I did see someone had drawn a lady's part. Quite detailed. The guy obviously had talent.",
    name: "Alan Partridge"
  }, {
    quote: "Do you know what this bathroom says to me? Aqua. Which is French for water. It's like being inside an enormous Fox's Glacier Mint. Which, again, to me is a bonus.",
    name: "Alan Partridge"
  }];

  $("button").on("click", function() {
    var quote = quoteSource[Math.floor(Math.random() * quoteSource.length)];
    $('.message').text(quote.quote + ' - ' + quote.name);
  });
});
