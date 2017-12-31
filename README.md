# re-blogger

## Description
A simple react blogging proof-of-concept setup. It does
does not have many of the core features of a full-blown
blog such as comments; however, such features should
not be too hard to add in the future.

What this application does is allow users to create blog
posts written in `markdown`. No `react` components are
needed to be created manually. With a `markdown` posts
created, the user simply needs to run one of the
following:
```shell
  npm run post:update
```
or
```shell
  yarn run post:update
```

This will recursively search the `posts` directory and
generate a new `posts.json` mapping in the `src`
directory. The only required file in the `posts`
directory is the `home.md` file. This represents the
home page.

## Usage
1. Add a `markdown` file in the `posts` directory.
2. Run `npm run post:update` or `yarn run post:update`.
3. The name of the markdown file is the name of the post
marked in the dropdown menu.
4. Run `yarn build` to get the updated production files.
