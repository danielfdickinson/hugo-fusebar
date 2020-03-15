# fusebar Changelog

## Version 1.1.1
- Fix Hugo module configuration.
- Switch back to krisk-Fuse from plainfuse.  Kiro Risk is doing lots of
  work and it doesn't make sense to duplicate that, now that we have
  a fork that has auditable assets (non-minified fuse.js).
- Vendor krisk-Fuse for use while testing (hugo mod vendor).
- Add browser-sync for manual testing / debugging.
- Use http-server for CI tests.
- Add concurrently for using http-server and running tests using it.
- Fix CI by adding working tests.

## Version 1.1.0
- Switch to Fuse.js as the search backend

## Version 1.0.0
- Initial version
