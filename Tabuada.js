let N = 1


for (let index = 1; index <= 10; index++) {
    console.log(" " + N + " x " + index  + " = " + N * index)
    if (index >= 10) {
      index = 0
      N = N + 1
      console.log("")  
    }
    if (N > 10) {
        break
    }
}