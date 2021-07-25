# Grossr

This is a React+Redux+Typescript application demonstrating a medical lab workflow application.

## Architecture and Technical Decisions

In image uploading, I chose to encode the images as data URLs instead of object URLs (c.f., <https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded>) because I wanted to persist them into the Redux store and possibly beyond the browser session; ideally, the images would be uploaded to a back-end server (on my to-do list below), and could then more reliably be stored as an ObjectURL.

The `react-image-annotation` dependency used for image annotation functionality. This package is a little out of date, so it would be good to find a suitable alternative, or fork it.

I chose not to use a UI library like Material-UI or React-Bootstrap in order to demonstrate the ability to create a sleek UIs with just CSS. However, when building a customer-facing application with many pages and components, I'd strongly lean toward using (and extending) one so as to streamline things like layout, forms, typography, etc.

## To Do

- [x] Add Redux and Typescript
- [x] Add routes and skeleton components
  - [x] Case list view
  - [x] Case view
  - [x] Case edit/create
- [x] Add skeleton state slice, reducer, actions
- [x] Create/view/edit/delete case
- [ ] Case list filtering, sorting
- [x] Create/delete note
- [x] Create/delete image
- [x] Create image annotation
- [x] Status functionality (restricted set status)
- [ ] Pretty UI
  - [ ] Responsive
- [ ] Tests for Reducer

## Nice to Haves

- [ ] Delete/edit image annotation
- [ ] Search table
- [ ] Figure out modularized routing (e.g., routes declared in features and imported into `App` routes)
- [ ] More Tests
- [ ] Toggle user between technician and admin to differentiate action permissions
- [ ] Lane view for statuses
- [ ] Case activity log/history
- [ ] Threads/replies to notes or annotations
- [ ] Printer-friendly view
- [ ] Case previews (nested in table, or on hover, or in side view)
- [ ] Subtle animations/transitions
- [ ] Back-end connection
  - [ ] Database persistence
    - [ ] Case table
    - [ ] Note table
    - [ ] Image table
- [ ] Drag and drop image upload
- [ ] Night mode theme
- [ ] User login/authentication
  - [ ] Permissions (create vs. approve)
- [ ] Bulk table action
- [ ] "Tasks" route, slice, components (to demo extensibility)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
