//for loops
for(let i=1;i<=10;i++)
{
    if(i==5)
    {
        console.log(`${i} is best Number`);
        
    }
    const elements=i;
    console.log(elements);
    
}

for(let i=1;i<=10;i++)
{
    console.log(`The Outer loop: ${i}`);
    for(let j=1;j<=10;j++)
    {
       // console.log(`the inner looop value ${j} and outer loop value ${i}`);   
       console.log(`${i}*${j}= `,i*j);      
    }
}