﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probachetyre
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудник.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудник CustomAttributes)

    // *** End programmer edit section *** (Сотрудник CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникE", new string[] {
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "ДатаРождения as \'Дата рождения\'",
            "СерНомПаспорта as \'Серия и номер паспорта\'",
            "Телефон as \'Телефон\'",
            "Должности as \'Должности\'"})]
    [MasterViewDefineAttribute("СотрудникE", "Должности", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Должность")]
    [View("СотрудникL", new string[] {
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "ДатаРождения as \'Дата рождения\'",
            "СерНомПаспорта as \'Сер ном паспорта\'",
            "Телефон as \'Телефон\'",
            "Должности.Должность as \'Должность\'"})]
    public class Сотрудник : ICSSoft.STORMNET.DataObject
    {
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private System.DateTime fДатаРождения;
        
        private int fСерНомПаспорта;
        
        private int fТелефон;
        
        private IIS.Probachetyre.Должности fДолжности;
        
        // *** Start programmer edit section *** (Сотрудник CustomMembers)

        // *** End programmer edit section *** (Сотрудник CustomMembers)

        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Get start)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Get end)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Set start)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Сотрудник.ДатаРождения Set end)

                // *** End programmer edit section *** (Сотрудник.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Имя Get start)

                // *** End programmer edit section *** (Сотрудник.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудник.Имя Get end)

                // *** End programmer edit section *** (Сотрудник.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Имя Set start)

                // *** End programmer edit section *** (Сотрудник.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудник.Имя Set end)

                // *** End programmer edit section *** (Сотрудник.Имя Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Отчество Get start)

                // *** End programmer edit section *** (Сотрудник.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудник.Отчество Get end)

                // *** End programmer edit section *** (Сотрудник.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Отчество Set start)

                // *** End programmer edit section *** (Сотрудник.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудник.Отчество Set end)

                // *** End programmer edit section *** (Сотрудник.Отчество Set end)
            }
        }
        
        /// <summary>
        /// СерНомПаспорта.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.СерНомПаспорта CustomAttributes)
        public virtual int СерНомПаспорта
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Get start)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Get start)
                int result = this.fСерНомПаспорта;
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Get end)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Set start)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Set start)
                this.fСерНомПаспорта = value;
                // *** Start programmer edit section *** (Сотрудник.СерНомПаспорта Set end)

                // *** End programmer edit section *** (Сотрудник.СерНомПаспорта Set end)
            }
        }
        
        /// <summary>
        /// Телефон.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Телефон CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Телефон CustomAttributes)
        public virtual int Телефон
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Get start)

                // *** End programmer edit section *** (Сотрудник.Телефон Get start)
                int result = this.fТелефон;
                // *** Start programmer edit section *** (Сотрудник.Телефон Get end)

                // *** End programmer edit section *** (Сотрудник.Телефон Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Телефон Set start)

                // *** End programmer edit section *** (Сотрудник.Телефон Set start)
                this.fТелефон = value;
                // *** Start programmer edit section *** (Сотрудник.Телефон Set end)

                // *** End programmer edit section *** (Сотрудник.Телефон Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудник.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудник.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудник.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудник.Должности CustomAttributes)

        // *** End programmer edit section *** (Сотрудник.Должности CustomAttributes)
        [PropertyStorage(new string[] {
                "Должности"})]
        [NotNull()]
        public virtual IIS.Probachetyre.Должности Должности
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Get start)

                // *** End programmer edit section *** (Сотрудник.Должности Get start)
                IIS.Probachetyre.Должности result = this.fДолжности;
                // *** Start programmer edit section *** (Сотрудник.Должности Get end)

                // *** End programmer edit section *** (Сотрудник.Должности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудник.Должности Set start)

                // *** End programmer edit section *** (Сотрудник.Должности Set start)
                this.fДолжности = value;
                // *** Start programmer edit section *** (Сотрудник.Должности Set end)

                // *** End programmer edit section *** (Сотрудник.Должности Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникE", typeof(IIS.Probachetyre.Сотрудник));
                }
            }
            
            /// <summary>
            /// "СотрудникL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникL", typeof(IIS.Probachetyre.Сотрудник));
                }
            }
        }
    }
}
