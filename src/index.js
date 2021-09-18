const age = prompt('Please inupt your age');

if (age >= 0 && age <= 12) {
  document.write('You are a child');
} else if (age > 12 && age <= 18) {
  document.write('You are a teenager');
} else if (age > 18 && age <= 60) {
  document.write('You are an adult');
} else if (age > 60) {
  document.write('You are an old man');
} else {
  document.write('You entered wrong value!!!!')
}
