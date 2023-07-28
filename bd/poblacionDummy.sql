INSERT INTO ojosdgato.User (name, lastname, email, phone, username, password, type)
VALUES
('John', 'Doe', 'john@example.com', 1234567890, 'johndoe', 'password123', 1),
('Jane', 'Smith', 'jane@example.com', 9876543210, 'janesmith', 'pass1234', 2),
('Mike', 'Johnson', 'mike@example.com', 5678901234, 'mikejohnson', 'securepw', 1),
('Sarah', 'Brown', 'sarah@example.com', 6543210987, 'sarahbrown', 'mypassword', 2),
('David', 'Lee', 'david@example.com', 5555555555, 'davidlee', 'test123', 1);
INSERT INTO ojosdgato.Service (name, price, description, time)
VALUES
('Tecnica Clásisa', 25.00, 'Diseños natural', '30 minutes'),
('Tecnica Hibrida', 15.00, 'Resalta mirada', '45 minutes'),
('Tecnica Volumen', 50.00, 'Mirada dramática', '60 minutes'),
('Retiro', 35.00, 'Retiro seguro', '40 minutes');
INSERT INTO ojosdgato.Brand (name, image)
VALUES
('Lashlab', 'nike_logo.jpg'),
('LashWashMX', 'adidas_logo.jpg'),
('BrigthLash', 'apple_logo.jpg');
INSERT INTO ojosdgato.Product (name, price, description, stock, rating, image)
VALUES
('Lashbrush', 79.99, 'Comfortable running shoes', 50, 4, 'running_shoes.jpg'),
('Shampoo', 699.00, 'High-end smartphone', 30, 5, 'smartphone.jpg'),
('Removedor', 1099.99, 'Powerful laptop', 20, 4, 'laptop.jpg');
select * from user;
select * from service;
