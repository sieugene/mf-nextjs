
The repository was taken as a basis [mf-nextjs](https://github.com/schalela/mf-nextjs "mf-nextjs")


### Description 
I have expanded this example based on the original. 
Adding dockerization, typescript, env.

> **About the recent update**   
Added SSR support, but only in dev mode, 
no idea why it doesn't work in production.

------------

> **About Types**   
In our shell, types are declared as global. In a certain interpretation, if we use it as a non-monorepository, we would keep each service in separate repositories, this file of global types would be a binder that would share common types. For example, these types could be separated into a separate package as npm.

------------


> **About dockerization**    
I have created for each dockerfile service they are equivalent to each. And there was also the creation of docker-compose which runs all the services together.

### Development
### 1. Install project dependencies

Run in root folder:

`$ yarn install `

### 2. Start local development mode

Being in the project directory, execute in the console:

`$ yarn start `

### 3.  Open
`http://localhost:3000 - main app`

`http://localhost:3001 - cube app`

`http://localhost:3002 - prisma app`


------------

### Build
### 1. Run build
Run in root folder:

`$ yarn build `

### 2. Start build

`$ yarn serve `

### 3.  Open
`http://localhost:3000 - main app`

`http://localhost:3001 - cube app`

`http://localhost:3002 - prisma app`

------------
### Docker
`$ docker-compose up  -d `

