
const queryChain = (done) => {
  Person.find({ favoriteFoods: "burritos" })
    .sort({ name: 1 }) 
    .limit(2) 
    .select("-age") 
    .exec((err, data) => {
      if (err) return done(err);
      done(null, data);
    });
};