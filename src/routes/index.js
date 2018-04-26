/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    // The home route is added to client.js to make sure shared components are
    // added to client.js as well and not repeated in individual each route chunk.
    {
      path: '',
      load: () => import(/* webpackMode: 'eager' */ './home'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/classes',
      load: () => import(/* webpackChunkName: 'classes' */ './classes'),
    },
    {
      path: '/assignments',
      load: () => import(/* webpackChunkName: 'assignments' */ './assignments'),
    },
    {
      path: '/grades',
      load: () => import(/* webpackChunkName: 'grades' */ './grades'),
    },
    {
      path: '/messages',
      load: () => import(/* webpackChunkName: 'messages' */ './messages'),
    },
    {
      path: '/notes',
      load: () => import(/* webpackChunkName: 'notes' */ './notes'),
    },
    {
      path: '/profile',
      load: () => import(/* webpackChunkName: 'profile-me' */ './profile-me'),
    },
    {
      path: '/profile/:id',
      load: () => import(/* webpackChunkName: 'profile' */ './profile'),
    },
    {
      path: '/note/:id',
      load: () => import(/* webpackChunkName: 'note-full' */ './note-full'),
    },
    {
      path: '/messages/:id',
      load: () => import(/* webpackChunkName: 'message' */ './message'),
    },
    {
      path: '/class/:class',
      load: () => import(/* webpackChunkName: 'class' */ './class'),
    },
    {
      path: '/whiteboard/:class',
      load: () => import(/* webpackChunkName: 'whiteboard' */ './whiteboard'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
