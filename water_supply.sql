-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2021 at 11:33 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `water_supply`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `customers_sp` (IN `_updateid` INT, IN `_name` VARCHAR(250), IN `_gender` VARCHAR(10), IN `_phone` VARCHAR(250), IN `_district` VARCHAR(250), IN `_sector` VARCHAR(250), IN `_village` VARCHAR(250), IN `_houseNo` VARCHAR(250))  NO SQL
BEGIN

if EXISTS(SELECT * FROM customers WHERE id = _updateid )THEN

UPDATE customers SET fullname = _name,gender = _gender,phone = _phone,district=_district,sector=_sector,village=_village,house_no=_houseNo WHERE id = _updateid;

SELECT 'Updated' As  Message;

ELSE
INSERT INTO customers(fullname,gender,phone,district,sector,village,house_no) VALUES(_name,_gender,_phone,_district,_sector,_village,_houseNo);

SELECT 'Registered' As Message;


END if;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `expense_sp` (IN `_id` INT, IN `_name` VARCHAR(250), IN `_amount` INT, IN `_date` DATE, IN `_desc` TEXT)  NO SQL
BEGIN

if EXISTS(SELECT * FROM expense WHERE id = _id )THEN

UPDATE expense SET name = _name,amount = _amount,date = _date,description=_desc WHERE id = _id;

SELECT 'Updated' As  Message;

ELSE
INSERT INTO expense(name,amount,date,description) VALUES(_name,_amount,_date,_desc);

SELECT 'Registered' As Message;


END if;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `invoice_sp` (IN `_invo_id` INT, IN `_houseNo` INT, IN `_date` DATE, IN `_name` VARCHAR(250), IN `_prev` FLOAT, IN `_new` FLOAT, IN `_dis` FLOAT, IN `_price` FLOAT, IN `_exLoan` FLOAT, IN `_total` FLOAT, IN `_balance` VARCHAR(10), IN `_paid` VARCHAR(10))  NO SQL
BEGIN

if EXISTS(SELECT * FROM invoice WHERE invoice_id = _invo_id )THEN

UPDATE invoice SET house_no = _houseNo,date = _date,name=_name,prev_kw = _prev,new_kw=_new,distance=_dis,price=_price,
ex_loan=_exLoan,total=_total,Balance=_balance,paid=_paid WHERE invoice_id = _invo_id;

SELECT 'Updated' As  Message;

ELSE
INSERT INTO invoice(house_no,date,name,prev_kw,new_kw,distance,price,ex_loan,total,Balance,paid) VALUES(_houseNo,_date,_name,_prev,_new,_dis,_price,_exLoan,_total,_balance,_paid);

SELECT 'Registered' As Message;


END if;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `login_sp` (IN `_username` VARCHAR(250), IN `_password` VARCHAR(250))  NO SQL
BEGIN
if EXISTS(SELECT * FROM users WHERE users.username=_username AND users.password=PASSWORD(_password))THEN

	if EXISTS(SELECT * FROM users WHERE users.username=_username AND 			users.password=PASSWORD(_password)AND 						            users.status='inActive')THEN
           SELECT 'Deny' as  Message;
     ELSE
        SELECT *FROM users WHERE users.username=_username;
     end if;    


ELSE
 select 'Incorrect' as Message;
end IF;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `salary_sp` (IN `_id` INT, IN `_date` DATE, IN `_name` VARCHAR(250), IN `_salary` INT)  NO SQL
BEGIN

if EXISTS(SELECT * FROM salary WHERE id = _id )THEN

UPDATE salary SET name = _name,date = _date,salary = _salary WHERE id = _id;

SELECT 'Updated' As  Message;

ELSE
INSERT INTO salary(date,name,salary) VALUES(_date,_name,_salary);

SELECT 'Registered' As Message;


END if;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `staffs_sp` (IN `_updateid` INT, IN `_name` VARCHAR(250), IN `_gender` VARCHAR(10), IN `_phone` VARCHAR(20), IN `_address` VARCHAR(250), IN `_title` VARCHAR(250), IN `_salary` INT, IN `_date` DATE)  NO SQL
BEGIN

if EXISTS(SELECT * FROM staffs WHERE id = _updateid )THEN

UPDATE staffs SET fullname = _name,gender = _gender,phone = _phone,address=_address,title=_title,salary=_salary,date=_date WHERE id = _updateid;

SELECT 'Updated' As  Message;

ELSE
INSERT INTO staffs(fullname,gender,phone,address,title,salary,date) VALUES(_name,_gender,_phone,_address,_title,_salary,_date);

SELECT 'Registered' As Message;


END if;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `users_sp` (IN `_id` VARCHAR(250), IN `_name` VARCHAR(250), IN `_username` VARCHAR(250), IN `_password` VARCHAR(250), IN `_gender` VARCHAR(10), IN `_phone` VARCHAR(250), IN `_img` VARCHAR(250))  NO SQL
BEGIN

if EXISTS(SELECT * FROM users WHERE id = _id )THEN

UPDATE users SET name = _name,username = _username,password = PASSWORD(_password),gender=_gender,phone=_phone,image=_img WHERE id = _id;

SELECT 'Updated' As  Message;

ELSE
INSERT INTO users(id,name,username,password,gender,phone,image) VALUES(_id,_name,_username,PASSWORD(_password),_gender,_phone,_img);

SELECT 'Registered' As Message;


END if;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `district` varchar(250) NOT NULL,
  `sector` varchar(250) NOT NULL,
  `village` varchar(250) NOT NULL,
  `house_no` varchar(250) NOT NULL,
  `date_reg` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `fullname`, `gender`, `phone`, `district`, `sector`, `village`, `house_no`, `date_reg`) VALUES
(43, 'Abirashiid abdullahi', 'Male', '06782354623', 'hodan', 'w4', 'sebiyano', '763', '2020-10-31 17:31:52'),
(44, 'naasir daahir', 'Male', '667889899', 'hodan', 'W2', 'Zybiyano', '776', '2021-02-25 20:33:36'),
(45, 'mahamed ahmed gaaid', 'Male', '76786788', 'Howlwadag', 'w1', 'kl', '66', '2021-02-25 20:34:14'),
(46, 'Osman Aba-Haji', 'Male', '65863', 'hodan', 'W2', 'xamarweyne', '776', '2021-03-20 22:26:11');

-- --------------------------------------------------------

--
-- Table structure for table `expense`
--

CREATE TABLE `expense` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expense`
--

INSERT INTO `expense` (`id`, `name`, `amount`, `date`, `description`) VALUES
(6, 'faadumo maxamed axmed', 560, '2020-10-13', 'repair mator'),
(9, 'naasir', 120, '2020-11-06', 'printer');

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `invoice_id` int(11) NOT NULL,
  `house_no` int(250) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(250) NOT NULL,
  `prev_kw` float NOT NULL,
  `new_kw` float NOT NULL,
  `distance` float NOT NULL,
  `price` float NOT NULL,
  `ex_loan` float NOT NULL,
  `total` float NOT NULL,
  `Balance` int(11) NOT NULL,
  `paid` varchar(10) NOT NULL DEFAULT 'no'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`invoice_id`, `house_no`, `date`, `name`, `prev_kw`, `new_kw`, `distance`, `price`, `ex_loan`, `total`, `Balance`, `paid`) VALUES
(5, 66, '2021-04-17', 'mahamed ahmed gaaid', 8, 9, 1, 7, 9, 16, 0, 'yes'),
(6, 66, '2021-04-17', 'mahamed ahmed gaaid', 6, 7, 1, 6, 7, 13, 16, 'no'),
(7, 66, '2021-05-19', 'mahamed ahmed gaaid', 10, 12, 2, 10, 20, 40, 69, 'no'),
(8, 763, '2021-05-19', 'Abirashiid abdullahi', 19, 10, -9, 9, 10, 71, 71, 'no'),
(9, 763, '2021-05-19', 'Abirashiid abdullahi', 10, 12, 2, 10, 11, 31, 71, 'yes');

-- --------------------------------------------------------

--
-- Table structure for table `salary`
--

CREATE TABLE `salary` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `name` varchar(250) NOT NULL,
  `salary` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `salary`
--

INSERT INTO `salary` (`id`, `date`, `name`, `salary`) VALUES
(26, '2015-10-01', 'mohemed abdullahi ahmed', '500'),
(27, '2020-06-09', 'mohemed abdullahi ahmed', '500'),
(31, '2020-10-08', 'jaamac warsame cabdi', '200'),
(32, '2020-09-02', 'mohemed abdullahi ahmed', '500'),
(33, '2021-03-06', 'mohemed abdullahi ahmed', '0'),
(34, '2021-03-06', 'faadumo maxamed axmed', '0'),
(35, '2021-03-06', 'mohamed salah', '0');

-- --------------------------------------------------------

--
-- Table structure for table `staffs`
--

CREATE TABLE `staffs` (
  `id` int(11) NOT NULL,
  `fullname` varchar(250) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(150) NOT NULL,
  `title` varchar(250) NOT NULL,
  `salary` varchar(250) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `staffs`
--

INSERT INTO `staffs` (`id`, `fullname`, `gender`, `phone`, `address`, `title`, `salary`, `date`) VALUES
(11, 'mohemed abdullahi ahmed', 'Male', '749826', 'waberi', 'manager', '500', '2020-10-16'),
(12, 'faadumo maxamed axmed', 'Female', '8764387', 'Howlwadaag', 'cleaner', '200', '2016-10-17'),
(14, 'cali', 'Male', '06145655645', 'kaxda', 'worker', '150', '2020-10-28'),
(17, 'mohamed salah', 'Male', '097986', 'karaaan', 'mechanic', '500', '2016-06-01'),
(18, 'jaamac warsame cabdi', 'Male', '767567765', 'suqa xoolaha', 'guardian', '200', '2020-07-15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(250) NOT NULL,
  `name` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `status` varchar(11) NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `gender`, `phone`, `status`, `image`) VALUES
('10', 'hi', 'hi', '*B6BDA741F59FE8066344FE3E118291C5D7DD12AD', 'Male', '333336565', '', '10.png'),
('5', 'Rashka Boy', 'rashka', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'Male', '6166262773', '', '5.png'),
('6', 'naasir daahir', 'naasir', '*BD5E64C5EF04C3EC42D63B6EB21120CF509730A6', 'Male', '6166262773', '', '6.png'),
('7', 'cdc', 'cdc', '*23AE809DDACAF96AF0FD78ED04B6A265E05AA257', 'Male', '6166262773', '', '7.png'),
('8', 'mcdev', 'MC', '*BD5E64C5EF04C3EC42D63B6EB21120CF509730A6', 'Male', '6166262773', '', '8.png'),
('9', 'cdc', 'cdc', '*BD5E64C5EF04C3EC42D63B6EB21120CF509730A6', 'Female', '333336565', '', '9.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expense`
--
ALTER TABLE `expense`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`invoice_id`);

--
-- Indexes for table `salary`
--
ALTER TABLE `salary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staffs`
--
ALTER TABLE `staffs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `expense`
--
ALTER TABLE `expense`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `invoice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `salary`
--
ALTER TABLE `salary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `staffs`
--
ALTER TABLE `staffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
