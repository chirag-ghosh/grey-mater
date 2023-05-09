# <div align="center">Grey-Mater</div>

## <div align="center">My personal website</div>

<br/>

## Tech Stack

**Framework:** NextJS (Typescript)

**Styling:** SASS

<br/>

## Run Locally

Clone the project

```bash
  git clone https://github.com/chirag-ghosh/grey-mater
```

Go to the project directory

```bash
  cd grey-mater
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

Add compressed and blurred image to gallery (ImageMagick required)

```bash
    for i in *.jpg; do convert $i -resize '1920x1080>' -quality 75% compressed/$i; done;
    for i in *.jpg; do convert $i -resize '1920x1080>' -quality 75% -blur 0x20 blurred/$i; done;
```

<br/>

<i>This README was created using [readme.so](https://readme.so/) because I was lazy. Check it out ;)</i>