
# HANGMAN GAME

El juego se elaboró de tal manera que sea multijugador, es decir, permite que varios usuarios se conecten y jueguen entre sí y obtiene a su vez la palabra a adivinar de una API externa, que devuelve una palabra al azar cada vez que se solicita. El juego muestra también la palabra oculta con guiones bajos, y revela las letras acertadas cuando el usuario las ingresa, al mismo tiempo se lleva el control de los intentos fallidos del usuario, donde cada que sucede un intento fallido por parte del usuario jugador la imagen del ahorcado se actualiza y muestra el dibujo del ahorcado correspondiente a cada intento.  El juego usa una API Web para poder implementar las funcionalidades del juego y usa como estructura base el proyecto realizado por el equipo que recibe por nombre "Kahoot!" por lo que las estructuras son en su mayoría iguales a esa versión anterior.

¡IMPORTANTE! El usuario admnistrador (anfitrión) deberá ser el siguiente para que el juego funcione con normalidad, es decir, el juego tiene un usuario administrador preestablecido que es:

Usuario: Admin 
Clave: 123

```bash
# Install npm 
npm npm install

# run dev
npm run dev
```

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
