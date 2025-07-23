import java.util.Scanner;

public class Palindromo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Escribe una palabra: ");
        String palabra = scanner.nextLine().toLowerCase(); // Convertimos a minúscula

        String invertida = new StringBuilder(palabra).reverse().toString();

        if (palabra.equals(invertida)) {
            System.out.println("Sí es un palíndromo.");
        } else {
            System.out.println("No es un palíndromo.");
        }

        scanner.close();
    }
}