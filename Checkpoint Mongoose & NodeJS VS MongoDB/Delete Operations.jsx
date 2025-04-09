
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return done(err);
    done(null, removedPerson);
  });
};


const removeManyPeople = (done) => {
  Person.remove({ name: "Mary" }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};