// Declare value
val x = 2

def return_string : String = "meow"

/**
 * Declare a function
 * @type {Boolean}
 */
def and(x, y): Boolean = x && y

// Declare an object/module
object MyModule {
  
  def abs(n: Int): Int =
    if (n < 0) -n else n
  
  private def formatAbs(x: Int) = {
    val msg = "The absolute value of %d is %d"
    msg.format(x, abs(x))
  }

  def main(args: Array[String]): Unit =
    println(formatAbs(-42))
}
