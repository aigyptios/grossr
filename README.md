# Grossr

This is a React+Redux+Typescript application demonstrating a medical lab workflow application.

(This README assumes you have node and npm installed.)

Once you have cloned the repo, you can run `npm i` in the directory to install packages.

Once that's done, you can run `npm start` and hit up <http://localhost:3000>.

## Architecture and Technical Decisions

### Routes

The app has the following routes:

- `/cases/` to view the case list (the app defaults to this route if no other route matches)
- `/cases/create` to create a case
- `/case/:id` to view an already created case
- `case/:id/edit` to edit a case

### Components

Components are divided into feature-related and common components (in `features` and `common`, respectively). All components related to cases are to be found in `features/cases`, along with the Redux store. Common components can be shared among different features, and are in their own directory. (This is not groundbreaking.)

### Images

In image uploading, I chose to encode the images as data URLs instead of object URLs (c.f., <https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded>) because I wanted to persist them into the Redux store and possibly beyond the browser session; ideally, the images would be uploaded to a back-end server (on my 'Nice to Haves' list below), and could then more reliably be stored as an ObjectURL temporarily before being uploaded.

The `react-image-annotation` dependency was used for image annotation functionality. This package is good for a demo application, but because it's a little out of date, it could use a lot more rigorous feature testing (e.g., annotations toward the bottom of an image get cut off, which I've tried to mitigate by increasing the padding). It would be good to find a suitable alternative, or fork it to maintain it.

There are some dummy images included in `assets/images/specimens` that can be used to showcase the image annotation functionality.

### UI and CSS

I chose not to use a UI library like Material-UI or React-Bootstrap in order to demonstrate the ability to create a sleek UIs with just CSS. However, when building a customer-facing application with many pages and components, I'd strongly lean toward using (and extending) one so as to streamline things like layout, forms, typography, etc. Due to limitations on time, the CSS here could be significantly optimized; I would like to extract common colors, layout values (padding and margins), media queries into repeatable modules, or into a theme. I'd like to try an atomic CSS approach, like [Tailwind](https://tailwindcss.com/).

In retrospect, I would have chosen to use a component library for the table functionality (sorting, filtering, searching, pagination, etc.), since it took more time than anticipated. It ended up being the last thing I worked on and the thing I would most like to improve.

### Tests

Although I do practice TDD when working on production-level code, I decided to save tests for the end in order to get the functionality done; unfortunately, that never happened, and I've included it in the to-do list.

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
- [x] Pretty UI
  - [x] Responsive (Can be improved)
- [ ] Tests for Reducer
- [ ] Cleaner CSS

## Nice to Haves

- [ ] Delete/edit image annotation
- [ ] Search table
- [ ] Figure out modularized routing (e.g., routes declared in features and imported into `App` routes)
- [ ] More Tests
- [ ] Toggle user between technician and admin to differentiate action permissions
- [ ] Lane view for statuses
- [ ] Case activity log/history
- [ ] Form validation
- [ ] Colors for statuses and accept/reject buttons
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
