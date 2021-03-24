import React from "react";
import { Table, Row, Rows } from 'react-native-table-component';
import styles from "../styles/StudentTableStyles";
import {View} from "react-native";
import {IStudentTableProps} from "../interfaces/IStudentTableProps";

export const StudentTable = ({table}:IStudentTableProps) => (
        <View>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={table.header} style={styles.head} textStyle={styles.text}/>
                <Rows data={table.body} textStyle={styles.text}/>
            </Table>
        </View>
    );