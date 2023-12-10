package Probachetyre.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probachetyre.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ФормаРегКарт
 */
@Entity(name = "IISProbachetyreФормаРегКарт")
@Table(schema = "public", name = "ФормаРегКарт")
public class FormaRegKart {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnata")
    @Convert("Komnata")
    @Column(name = "Комната", length = 16, unique = true, nullable = false)
    private UUID _komnataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnata", insertable = false, updatable = false)
    private Komnata komnata;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Gost")
    @Convert("Gost")
    @Column(name = "Гость", length = 16, unique = true, nullable = false)
    private UUID _gostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Gost", insertable = false, updatable = false)
    private Gost gost;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Karty")
    @Convert("Karty")
    @Column(name = "Карты", length = 16, unique = true, nullable = false)
    private UUID _kartyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Karty", insertable = false, updatable = false)
    private Karty karty;


    public FormaRegKart() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}