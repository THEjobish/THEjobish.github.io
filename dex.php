<?php 
 Echo "<html>";
Echo
"<title>PHP Table</title>";
Echo
"<b> This table is a random number generator. A php script generates the rows and data cells of the table. </b>";

?>


<html>
<table>
   <tbody>
       <?php for ($i = 0; $i < 10; $i++) : ?>
           <tr>
               <?php for ($k = 0; $k < 10; $k++) : ?>
                   <?php $num = rand(1, 10); ?>
                   <td style="color: <?= $num < 5 ? 'red' : 'green'; ?>"><?= $num; ?></td>
               <?php endfor; ?>
           </tr>
       <?php endfor; ?>
   </tbody>
</table>

<p><a href=projects.html>Back</a></p>
</body>