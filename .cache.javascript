try {
  throw new Error('hello');
} catch (err) {
  console.log(err.message)
}