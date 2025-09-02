package com.eidosmedia.exercise;

public class Main {
    public static void main(String[] args) {


        // bit3 * 8 = 1 * 8 = 8
        // bit2 * 4 = 1 * 4 = 4
        // bit1 * 2 = 0 * 2 = 0
        // bit0 * 1 = 1 * 1 = 1

        // 1101 % 10

        int binaryNumber = 1101;

        int bit0 = binaryNumber % 10;
        int bit1 = (binaryNumber / 10) % 10;
        int bit2 = (binaryNumber / 100) % 10;
        int bit3 = (binaryNumber / 100) % 10;

        int decimalNumber = (bit3 * 8) + (bit2 * 4) + (bit1 * 2) + (bit0 * 1);

        System.out.println(decimalNumber);

    }
}