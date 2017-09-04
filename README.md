# fantasy-app

A little app I hacked together to help me with my NFL Fantasy League Draft. Created with mobile in mind but works fine on desktop.

http://play.dalehurwitz.com/fantasy/

## Run

### 1) Generate rankings json

Rankings are sourced from [Scout](http://fftoolbox.scout.com/football/rankings/?pos=top) and [FantasyPros](https://www.fantasypros.com/nfl/rankings/half-point-ppr-cheatsheets.php)
```
node ./parse
```


### 2) Install dependencies
```
npm i -g preact-cli
npm i
preact watch
```

