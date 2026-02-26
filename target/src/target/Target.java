package target;

import java.util.Scanner;

public class Target {
    public static void main(String[] args) {
        // TODO code application logic here
        int numeros[] = new int [15];
        Scanner teclado = new Scanner (System.in);
        
        for (int i = 0; i < 15; i++){
            System.out.println("Ingrese el numero para el indice " + i);
            numeros[i] = teclado.nextInt();
        }
        
        int cont = 0;
        
        for(int i = 0; i < 15; i ++){if(numeros[i] == 3){cont++;}}
        
        System.out.println("La cantidad de numeros 3 que hay es de: " + cont);
    }
}