

# hasdeno?

> Find out if [Deno](https://deno.land) can be accessed on the current system




### Install

    yarn add hasdeno --dev


### Usage

#### In buildscripts

```
scripts:{
	"build":"(hasnode || (echo Omg - use deno instead please && exit 1)) && rollup",
}
```

- Add the parameter -q to not output info (but only deal with the return code)
- Add the parameter --version to print the version number



#### From node

```
import hasDeno from 'hasdeno'  // default export is a boolean that will always have the same value. (Name it as you want)

if(hasDeno){
	console.log('Niiiiiice with Deno')
} else {
	console.log('Check out deno.land')
}
```



```
import {hasDeno, hasDenoVersion} from 'hasdeno'  // Import two functions that will update each time they are called

setInterval(()=>{ 
	if(hasDeno()){
		Console.log('You have Deno version ', hasDenoVersion())		
	}
 }, 5000);

```






----

I know I know - with Deno all the npm and node things should not be needed any more. Well, For some of us there is a transition period. Making it easyer to leverage the known ecosystem helps get Deno into the hands of all the people sitting in large organisations.

----