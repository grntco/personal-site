---
slug: inventory-application
title: Inventory Application
date: 2024-09-07
repo: https://github.com/grntco/inventory-application
---

This is a project for The Odin Project's Node.js course to build an [inventory application](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application).

I used JavaScript and Node/Express, EJS for templating, express-validator, and a PostgreSQL database accessed with node-postgres. I also used multer for file uploads and dotenv for accessing environment variables. To organize my project, I used the MVC pattern.

### Features

-   Create, update, and delete Lego items and categories.
-   You can view all items or items by a specific category.
-   If you delete a category, it's items will still exists, although without a category assigned to them.
-   Upload images when creating or updating an item!
