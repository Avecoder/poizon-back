module.exports = ({ env }) => ({
  host: env('HOST', 'https://poi-b1bm.onrender.com'),
  port: env.int('PORT', 2337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
