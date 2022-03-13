
The repository was taken as a basis [mf-nextjs](https://github.com/schalela/mf-nextjs "mf-nextjs")

### Description 
I have expanded this example based on the original. 
Adding dockerization, typescript, monorepo mode with ssr and remote mode without ssr.

## Alert
It is not recommended in production, because it can cause unintended errors, 
the library used ``@module-federation/nextjs-mf``, has a version higher than 
in this repository, but there are problems with it.

## Deployed demo links
Examples on vercel, remote mode only, without SSR.  
[Shell app](https://mf-nextjs-psi.vercel.app/ "Shell app")   
[App1](https://mf-nextjs-app1.vercel.app/ "App1")  
[App2](https://mf-nextjs-app2.vercel.app/ "App2") 


### Local
```sh
$ yarn install
$ make -B .env env=local
$ yarn dev

# http://localhost:3000 - main app
# http://localhost:3001 - cube app
# http://localhost:3002 - prisma app
```

### Build Monorepo
```sh
$ yarn install
$ make -B .env env=local
$ yarn build
$ yarn start

# http://localhost:3000 - main app
# http://localhost:3001 - cube app
# http://localhost:3002 - prisma app
```

### Docker Monorepo (SSR mode)
```sh
$ make -B .env env=local
$ docker-compose -f "docker-compose-monorepo.yml" up -d --build 
# http://localhost:3000 - main app
# http://localhost:3001 - cube app
# http://localhost:3002 - prisma app
```

### Docker Remote (No SSR mode)
```sh
$ make -B .env env=local
$ docker-compose -f "docker-compose.yml" up -d --build 
# http://localhost:3000 - main app
# http://localhost:3001 - cube app
# http://localhost:3002 - prisma app
```
