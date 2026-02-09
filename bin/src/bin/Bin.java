package bin;
public class Bin {
    public static void main(String[] args) {
        // TODO code application logic here
        int day = 1;
        String name;
        
        switch (day){
            case 1: name = "Lunes";
            break;
            case 2: name = "Martes";
            break;
            case 3: name = "Miercoles";
            break;
            case 4: name = "Jueves";
            break;
            case 5: name = "Viernes";
            break;
            case 6: name = "Sabado";
            break;
            case 7: name = "Domingo";
            break;
            default: name = "Invalido";
            break;
        }
        
        System.out.println("Hoy es " + name);
    }
}