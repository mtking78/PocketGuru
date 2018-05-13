-- Drops the "lifecoach" database if it exists currently --
DROP DATABASE IF EXISTS lifecoach_db;
-- Creates the "lifecoach" database --
CREATE DATABASE lifecoach_db;

-- --*** MySQL Event Schedulers *** --
-- Reset tasks with "daily" attribute at 0:00 every day --
DROP EVENT IF EXISTS `resetByDay`;
CREATE EVENT `resetByDay`
ON SCHEDULE
EVERY 1 DAY
STARTS '2000-01-01 00:00:00'
DO
UPDATE lifecoach_db.tasks SET completed = FALSE WHERE frequency = daily;
-- !IMPORTANT!
SET GLOBAL event_scheduler = ON;