# fusebar Changelog

## Version 0.2.1

- Update krisk-Fuse
- Add yarn dependency on krisk/Fuse for use by the fusebar npm module
- Move sourcemap to dist (instead is dist/sourcemaps)
- Use fusebar.dev.js and fuse.dev.js when envvar MODE=dev
- Depend on Fuse global being present in browser or node environment
  - That is make Fuse external rather than embedding in the webpack
  - So browser users need both the fusebar script and the fuse script.

## Version 0.2.0
- Update krisk-Fuse
- Change krisk-Fuse to non-Hugo module (that is as non-native Hugo
  module).
- Remove taxonomy pages from index.json
- Rework test framework
  - Eliminate use of server — mock instead
  - Don't worry about testing the underlying search, just test what's
    added by this module
  - Use mocking and jsdom to do browser-like tests.
- Tweak default search settings
- Use webpack and babel instead of writing in ES5 and only using
  concat.
- Improve 'dev' task
  - concurrently use browser-sync and webpack with watch
  - since we're using webpack watch, use dist not src in browser
- Lint and fix lint errors for 'test' JS

## Version 0.1.2
- Fix Hugo module configuration.
- Switch back to krisk-Fuse from plainfuse.  Kiro Risk is doing lots of
  work and it doesn't make sense to duplicate that, now that we have
  a fork that has auditable assets (non-minified fuse.js).
- Vendor krisk-Fuse for use while testing (hugo mod vendor).
- Add browser-sync for manual testing / debugging.
- Use http-server for CI tests.
- Add concurrently for using http-server and running tests using it.
- Fix CI by adding working tests.

## Version 0.1.1
- Switch to Fuse.js as the search backend

## Version 0.1.0
- Initial version
