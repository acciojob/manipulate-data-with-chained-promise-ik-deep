//your JS code here. If required.
 function manipulateData(inputArray) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Filter out odd numbers
          const filteredArray = inputArray.filter(num => num % 2 === 0);

          // Resolve with the filtered array after 3 seconds
          resolve(filteredArray);
        }, 3000);
      });
    }

    // Initial array
    const initialArray = [1, 2, 3, 4];

    // Manipulate data and chain promises
    manipulateData(initialArray)
      .then(filteredArray => {
        // Print the filtered array after 1 second
        setTimeout(() => {
          document.getElementById('output').innerText = `Filtered Array: ${filteredArray}`;
        }, 1000);

        // Multiply even numbers by 2
        const multipliedArray = filteredArray.map(num => num * 2);

        return multipliedArray;
      })
      .then(multipliedArray => {
        // Print the multiplied array after 2 seconds
        setTimeout(() => {
          document.getElementById('output').innerText += `Multiplied Array: ${multipliedArray}`;
        }, 2000);
      });