function info() {
  console.log(info);
   for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
info(10, false, 'google')
