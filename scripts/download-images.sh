#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download sample images
curl -o public/hero-bg.jpg https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80
curl -o public/about-image.jpg https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80
curl -o public/room1.jpg https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80
curl -o public/room2.jpg https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80
curl -o public/room3.jpg https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80 