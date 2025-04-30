import express, { Request, Response, NextFunction } from 'express';
var router = express.Router();

import type { MenuData, Menu, Dish, Category } from '../../types';
const menuJson = require('../../../data/menu');

router.post('/create', function(req, res, next) {
  const { name, price, description } = req.query;

  if (!name || !price || !description) {
    res.status(400).json({ error: 'name, price, and description are all required.' });
  }

  res.status(200).json({
    message: 'Dish created successfully (mock response)',
    dish: {
      name,
      price,
      description,
    },
  });
});

router.get('/list', function(req: Request<{}>, res: Response, next: NextFunction) {
  console.log(req.query);
  const castMenu = menuJson as MenuData;

  const menuCategories = Object.entries(castMenu).map(([menu, data]) => ({
    menu: menu,
    id: data.id,
    endpoint: `/menus/${data.id}`
  }));
  res.status(200).json(menuCategories);
});

router.get('/:id', function(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  const {id} = req.params;
  const categoryId = parseInt(id, 10);
  
  if (isNaN(categoryId)) {
    res.status(400).json({ error: 'Invalid menu id' });
  }
  
  const castMenu = menuJson as MenuData;
  const categoryEntry = Object.entries(castMenu).find(([_, data]) => data.id === categoryId);

  if (!categoryEntry) {
    res.status(404).json({ error: 'Menu not found' });
  }

  const [menuName, menuData] = categoryEntry!;

  res.status(200).json({
    menu: menuName,
    id: menuData.id,
    dishes: menuData.dishes,
  });
});

router.put('/dish/:id', function (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  const typedMenu = menuJson as Record<string, Category>;
  const { name, price, description } = req.query;
  const dishId = req.params.id;

  let dishFound = false;
  let updatedDish: Dish | null = null;

  for (const category of Object.values(typedMenu)) {
    for (const dish of category.dishes) {
      if (dish.id === dishId) {
        if (name !== undefined) dish.name = String(name);
        if (price !== undefined) dish.price = String(price);
        if (description !== undefined) dish.description = String(description);

        dishFound = true;
        updatedDish = dish;
        break;
      }
    }
    if (dishFound) break;
  }

  if (!dishFound) {
    res.status(404).json({ message: `Dish with id ${dishId} not found.` });
  }

  res.status(200).json({
    message: 'Dish updated successfully.',
    updatedDish,
  });
});

export default router;
