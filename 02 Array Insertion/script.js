document.getElementById('submit').addEventListener('click', (e) => {
    let arr = [60, 30, 10, 67, 40];
    console.log(arr);
    let element = document.getElementById('element').value;
    element = parseInt(element);
    let index = document.getElementById('index').value;
    index = parseInt(index);
  for(let i = arr.length-1; i>=0; i--)
    {

      if(i>=index)
        {
          arr[i+1] = arr[i];
        }
        if(i==index)
          {
            arr[i] = element;
          }
    }
    console.log(arr);
  });
