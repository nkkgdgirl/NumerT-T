SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
use equation

CREATE TABLE `equation` (
  `id` int(11) NOT NULL,
  `equation` text DEFAULT NULL,
  `xl` int(11) DEFAULT NULL,
  `xr` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `equation` (`id`, `equation`, `xl`, `xr`) VALUES
(1, '(x^4)-13', 1, 2),
(5, '(x^1)-13', 1, 10),
(6, '(x^2)-11', 4, 5),
(7, '(x^2)', 0, 9),
(8, '(x^3)', 0, 9),
(9, '1/4x-2x', 0, 9),
(20, 'x^2/4', 2, 8),
(21, 'x^2/4-1', 3, 10),
(22, '(x^1)-10', 2, 6);


ALTER TABLE `equation`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `equation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

